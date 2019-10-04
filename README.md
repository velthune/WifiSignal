#Wifi Signal

`WifiSignal` is a simply ReactJS component that draw a nice and super minimal Wifi signal.

#### Usage

Import `index.js` in your project and use it wherever:


    #import WifiSignal from "<path>/WifiSignal"
    
    
	export default function WifiSignal({level, size, top, color}) {
		return (
			<div>
	    		<WifiSignal level={row.value} color={"#34DC96"}/>
	    	</div>
    	)
   }

#### Props

`WifiSignal` supports these props:

- **level:** the wifi power signal [0..4]
- **size:** the wifi div container size
- **top:** top margin of wifi, if necessary to move element
- **color:** color for filled "bars"

