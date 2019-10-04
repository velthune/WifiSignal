import React from "react";

const Rad = ({dim, borderSize, color = "#353535", level}) => {
    if (dim === 0) {
        return null;
    }
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", border: `${borderSize}px solid transparent`,
        borderTopColor: dim > level ? "#EEE" : color,
        borderRadius: "50%",
        margin: "2px",
        borderStyle: "solid"
    }}>
        <Rad dim={dim - 1} borderSize={borderSize} level={level} color={color}/>
    </div>;
};

export default function WifiSignal({level, size, top, color}) {

    const frameSize = size ? size : 40;
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
        <Rad dim={4} borderSize={frameSize / 10} color={color} level={level}/>
    </div>;

}

