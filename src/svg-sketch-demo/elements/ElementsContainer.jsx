import React from 'react';
import Circle from './Circle'
import Line from './Line'
import Rectangle from './Rectangle'
import Polyline from './Polyline';

 const ElementsContainer = (props) => (
    <>
        {props.elements.map( (elem) => {
            switch(elem.type) {
                case 'Circle':
                  return <Circle key={elem.type + elem.properties.id} properties={elem.properties}/>
                case 'Line':
                    return <Line key={elem.type + elem.properties.id} properties={elem.properties}/>
                case 'Rectangle':
                  return <Rectangle key={elem.type + elem.properties.id} properties={elem.properties}/>
                case 'Polyline':
                    return <Polyline key={elem.type + elem.properties.id} properties={elem.properties}/>
                default:
                  return <div>Don't know what this is</div>;
              }        
        })}
    </>
 );

 export default ElementsContainer