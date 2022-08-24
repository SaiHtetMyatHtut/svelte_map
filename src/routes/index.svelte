<script>
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';
</script>

<section class="h-screen w-screen">
	<Map lat={16.789035} lon={96.160807} zoom={14}>
		<MapMarker lat={16.789035} lon={96.160807} label="Svelte Body Shaping"/>
	</Map>
	<!-- <div class="absolute  top-0 left-0 flex flex-col w-96 h-full">
		<div class="flex w-full h-32 items-center justify-center">
			<form class="w-80">
				<div class="relative">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-gray-500 dark:text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/></svg
						>
					</div>
					<input
						type="search"
						id="default-search"
						class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Mockups, Logos..."
						required=""
					/>
					<button
						type="submit"
						class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>Search</button
					>
				</div>
			</form>
		</div>
		<div class="w-full h-full px-8 space-y-2 overflow-y-scroll snap-y">
			{#each Array(10) as _, i}
				<div class="w-full h-24 rounded-md shadow-md border snap-center bg-white" />
			{/each}
		</div>
	</div> -->

</section>
