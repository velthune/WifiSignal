import React from "react";
import {number, shape, string} from "prop-types";

const Rad = ({dim, borderSize, colors, level}) => {
    if (dim === 0) {
        return null;
    }
    const signalColor = colors.signal ? colors.signal : WifiSignal.defaultProps.colors.signal;
    const noSignalColor = colors.noSignal ? colors.noSignal : WifiSignal.defaultProps.colors.noSignal;

    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", border: `${borderSize}px solid transparent`,
        borderTopColor: dim > level ? noSignalColor : signalColor,
        borderRadius: "50%",
        margin: "2px",
        borderStyle: "solid"
    }}>
        <Rad dim={dim - 1} borderSize={borderSize} level={level} colors={colors}/>
    </div>;
};

export default function WifiSignal({
                                       level = WifiSignal.defaultProps.level,
                                       size,
                                       top,
                                       colors
                                   }) {

    const frameSize = size ? size : WifiSignal.defaultProps.size;
    const paddingTop = top ? top : frameSize / 2;

    return <div className={`wifi-container waveStrength-${level}`} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: paddingTop,
        height: `${frameSize}px`,
        width: `${frameSize}px`,
    }}>
        <Rad dim={4} borderSize={frameSize / 10} colors={colors} level={level}/>
    </div>;

}

WifiSignal.propTypes = {
    level: number,
    size: number,
    top: number,
    colors: shape({
        signal: string,
        noSignal: string
    })
};

WifiSignal.defaultProps = {
    level: 0,
    size: 40,
    top: 0,
    colors: {
        signal: "#353535",
        noSignal: "#EEE"
    }
};
