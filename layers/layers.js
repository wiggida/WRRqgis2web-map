var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_OrthophotoExtent_1 = new ol.format.GeoJSON();
var features_OrthophotoExtent_1 = format_OrthophotoExtent_1.readFeatures(json_OrthophotoExtent_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrthophotoExtent_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrthophotoExtent_1.addFeatures(features_OrthophotoExtent_1);
var lyr_OrthophotoExtent_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OrthophotoExtent_1, 
                style: style_OrthophotoExtent_1,
                popuplayertitle: 'Orthophoto Extent',
                interactive: true,
                title: '<img src="styles/legend/OrthophotoExtent_1.png" /> Orthophoto Extent'
            });
var format_Area_2 = new ol.format.GeoJSON();
var features_Area_2 = format_Area_2.readFeatures(json_Area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_2.addFeatures(features_Area_2);
var lyr_Area_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_2, 
                style: style_Area_2,
                popuplayertitle: 'Area',
                interactive: true,
                title: '<img src="styles/legend/Area_2.png" /> Area'
            });
var format_Length_3 = new ol.format.GeoJSON();
var features_Length_3 = format_Length_3.readFeatures(json_Length_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Length_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Length_3.addFeatures(features_Length_3);
var lyr_Length_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Length_3, 
                style: style_Length_3,
                popuplayertitle: 'Length',
                interactive: true,
                title: '<img src="styles/legend/Length_3.png" /> Length'
            });
var format_Line_4 = new ol.format.GeoJSON();
var features_Line_4 = format_Line_4.readFeatures(json_Line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line_4.addFeatures(features_Line_4);
var lyr_Line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line_4, 
                style: style_Line_4,
                popuplayertitle: 'Line',
                interactive: true,
                title: '<img src="styles/legend/Line_4.png" /> Line'
            });
var format_Slope_5 = new ol.format.GeoJSON();
var features_Slope_5 = format_Slope_5.readFeatures(json_Slope_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slope_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slope_5.addFeatures(features_Slope_5);
var lyr_Slope_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Slope_5, 
                style: style_Slope_5,
                popuplayertitle: 'Slope',
                interactive: true,
                title: '<img src="styles/legend/Slope_5.png" /> Slope'
            });
var format_Annotation_6 = new ol.format.GeoJSON();
var features_Annotation_6 = format_Annotation_6.readFeatures(json_Annotation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Annotation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Annotation_6.addFeatures(features_Annotation_6);
var lyr_Annotation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Annotation_6, 
                style: style_Annotation_6,
                popuplayertitle: 'Annotation',
                interactive: true,
                title: '<img src="styles/legend/Annotation_6.png" /> Annotation'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_OrthophotoExtent_1.setVisible(true);lyr_Area_2.setVisible(true);lyr_Length_3.setVisible(true);lyr_Line_4.setVisible(true);lyr_Slope_5.setVisible(true);lyr_Annotation_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OrthophotoExtent_1,lyr_Area_2,lyr_Length_3,lyr_Line_4,lyr_Slope_5,lyr_Annotation_6];
lyr_OrthophotoExtent_1.set('fieldAliases', {'Name': 'Name', });
lyr_Area_2.set('fieldAliases', {'Descrip': 'Descrip', 'Name': 'Name', });
lyr_Length_3.set('fieldAliases', {'Descrip': 'Descrip', });
lyr_Line_4.set('fieldAliases', {'Descrip': 'Descrip', });
lyr_Slope_5.set('fieldAliases', {'Descrip': 'Descrip', 'delta.h': 'delta.h', });
lyr_Annotation_6.set('fieldAliases', {'Descrip': 'Descrip', });
lyr_OrthophotoExtent_1.set('fieldImages', {'Name': '', });
lyr_Area_2.set('fieldImages', {'Descrip': '', 'Name': '', });
lyr_Length_3.set('fieldImages', {'Descrip': '', });
lyr_Line_4.set('fieldImages', {'Descrip': '', });
lyr_Slope_5.set('fieldImages', {'Descrip': '', 'delta.h': '', });
lyr_Annotation_6.set('fieldImages', {'Descrip': '', });
lyr_OrthophotoExtent_1.set('fieldLabels', {'Name': 'no label', });
lyr_Area_2.set('fieldLabels', {'Descrip': 'no label', 'Name': 'no label', });
lyr_Length_3.set('fieldLabels', {'Descrip': 'no label', });
lyr_Line_4.set('fieldLabels', {'Descrip': 'no label', });
lyr_Slope_5.set('fieldLabels', {'Descrip': 'no label', 'delta.h': 'no label', });
lyr_Annotation_6.set('fieldLabels', {'Descrip': 'no label', });
lyr_Annotation_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});