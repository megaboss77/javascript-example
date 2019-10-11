var convert = require('xml-js');

    var xml = `<ProposalDate>
    <NameXml>Proposal Date</NameXml>
    <ValueXml>06/05/2019</ValueXml>
    </ProposalDate>`;
    
    var jsonOutput = 
    {
        "ProposalDate": {
            "Name":"Proposal Date",
            "Value":"06/05/2019"
        }
    };
    var fieldMapping = {
        "NameXml":"Name",
        "ValueXml":"Value"
    };
    //xml field = key and json field = value 

    var jsonXml = JSON.parse(convert.xml2json(xml, {compact: true, spaces: 4}));
    var mapXml = genMap(jsonXml);
    var mapJson = genMap(jsonOutput);

    Object.keys(fieldMapping).forEach((item)=>{
        if(mapXml.has(item)){
            var value = mapXml.get(item);
            if(value._text===mapJson.get(fieldMapping[item])){
                console.log('field '+item+':matched');
            }
        }else{
            console.log('field '+item+':not matched');
        }
    });

    function genMap(json){
        var map = new Map();
        Object.keys(json).forEach( (item,index,KeyArray)=>{
        //console.log('item:'+item);
        //console.log(array);
           if( typeof json[item] === 'object'){
            var a = json[item];
            var key = item;
            //console.log(item);
            map.set(item, json[item]);
            //item = key
            Object.keys(json[item]).forEach( (item,index,KeyArray)=>{
                //item = inner key 
                //console.log(item);
                map.set(item, a[item]);
           })
           }else{
            map.set(item, json[item]);
           }
        });
        return map;
        }