ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([79.551519, 24.319152, 88.101703, 31.674148]);
var wms_layers = [];

var format_StateBoundary_0 = new ol.format.GeoJSON();
var features_StateBoundary_0 = format_StateBoundary_0.readFeatures(json_StateBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_StateBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_0.addFeatures(features_StateBoundary_0);
var lyr_StateBoundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StateBoundary_0, 
                style: style_StateBoundary_0,
                interactive: false,
                title: '<img src="styles/legend/StateBoundary_0.png" /> StateBoundary'
            });
var format_DistrictBoundary_1 = new ol.format.GeoJSON();
var features_DistrictBoundary_1 = format_DistrictBoundary_1.readFeatures(json_DistrictBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistrictBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_1.addFeatures(features_DistrictBoundary_1);
var lyr_DistrictBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistrictBoundary_1, 
                style: style_DistrictBoundary_1,
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_1.png" /> DistrictBoundary'
            });

lyr_StateBoundary_0.setVisible(true);lyr_DistrictBoundary_1.setVisible(true);
var layersList = [lyr_StateBoundary_0,lyr_DistrictBoundary_1];
lyr_StateBoundary_0.set('fieldAliases', {'STATE_CODE': 'STATE_CODE', 'STATE_NAME': 'STATE_NAME', });
lyr_DistrictBoundary_1.set('fieldAliases', {'DCODE': 'DCODE', 'DISTRICT': 'DISTRICT', 'COMMAND': 'COMMAND', 'District_N': 'District_N', });
lyr_StateBoundary_0.set('fieldImages', {'STATE_CODE': '', 'STATE_NAME': '', });
lyr_DistrictBoundary_1.set('fieldImages', {'DCODE': '', 'DISTRICT': '', 'COMMAND': '', 'District_N': '', });
lyr_StateBoundary_0.set('fieldLabels', {'STATE_CODE': 'no label', 'STATE_NAME': 'inline label', });
lyr_DistrictBoundary_1.set('fieldLabels', {'DCODE': 'no label', 'DISTRICT': 'inline label', 'COMMAND': 'no label', 'District_N': 'no label', });
lyr_DistrictBoundary_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});