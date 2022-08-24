import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken = "pk.eyJ1IjoicG90YXRvbmVtbyIsImEiOiJjbDZmMGU0czAwY2hiM2Jyd3NqNThpaTByIn0.pzhnRdXdCt2WyZpDMYBglQ";

const key = Symbol();

export { mapbox, key };