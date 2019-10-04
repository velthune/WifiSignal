# Wifi Signal

`WifiSignal` is a simply ReactJS component that draw a nice and super minimal Wifi signal.

#### Usage

Import `index.js` in your project and use it wherever:


    import WifiSignal from "<your_path>/WifiSignal"    
    
    export default function MyView() {
        return (
            <div>
               <WifiSignal level={2} color={"#34DC96"}/>
            </div>
        );
    }
    
##### Render    
    
 <img src="wifi.png"/>

#### Props

`WifiSignal` supports these props:

- **level:** the wifi power signal [0..4]
- **size:** the wifi div container size
- **top:** top margin of wifi, if necessary to move element
- **color:** color for filled "bars"

