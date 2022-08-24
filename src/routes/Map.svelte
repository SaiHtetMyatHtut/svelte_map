<script>
	import { onDestroy, setContext } from 'svelte';
	import { key, mapbox } from '../mapboxgl.js';

	// set the context here...
	setContext(key, {
		getMap: () => map
	});

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;
	let routes = [
		{ lat: 96.15657668671662, lon: 16.792955329522528 },
		{ lat: 96.16235190532296, lon: 16.78925548011695 },
		{ lat: 96.16741064944068, lon: 16.79054419988958 },
		{ lat: 96.16643363877404, lon: 16.79291375858152 },
		{ lat: 96.15911691445007, lon: 16.79465973027216 }
	];

	function load() {
		map = new mapbox.Map({
			container,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [lon, lat],
			zoom
		});
		const start = [16.78903, 96.160807];
		getRoute(start);

		// Add starting point to the map
		map.addLayer({
			id: 'point',
			type: 'circle',
			source: {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								type: 'Point',
								coordinates: start
							}
						}
					]
				}
			},
			paint: {
				'circle-radius': 10,
				'circle-color': '#3887be'
			}
		});

		

		async function getRoute(end) {
			map.on('click', (event) => {
				console.log(routes)
				routes.push({ let: event.lngLat.lat, lon: event.lngLat.lng });
				map.getSource('route').setData(geojson);
			});
			let element = '';
			for (let index = 0; index < routes.length; index++) {
				if(index != 0){
					element += "%3B"+String(routes[index].lat)+ "%2C" + String(routes[index].lon);
				}else{
					element += String(routes[index].lat)+ "%2C" + String(routes[index].lon);
				}
			}
			const query = await fetch(
				`https://api.mapbox.com/directions/v5/mapbox/driving/${element}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${mapbox.accessToken}`,
				{ method: 'GET' }
			);
			const json = await query.json();
			const data = json.routes[0];
			const route = data.geometry.coordinates;
			const geojson = {
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'LineString',
					coordinates: route
				}
			};
			// if the route already exists on the map, we'll reset it using setData
			if (map.getSource('route')) {
				map.getSource('route').setData(geojson);
			}
			// otherwise, we'll make a new request
			else {
				map.addLayer({
					id: 'route',
					type: 'line',
					source: {
						type: 'geojson',
						data: geojson
					},
					layout: {
						'line-join': 'round',
						'line-cap': 'round'
					},
					paint: {
						'line-color': '#3887be',
						'line-width': 5,
						'line-opacity': 0.75
					}
				});
			}
			// add turn instructions here at the end
		}
	}

	onDestroy(() => {
		if (map) map.remove();
	});


</script>

<!-- this special element will be explained in a later section -->
<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css" on:load={load} />
</svelte:head>

<div class="w-full h-full" bind:this={container}>
	
	{#if map}
		<slot />
	{/if}
</div>
