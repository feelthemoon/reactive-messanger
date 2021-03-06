import tinycolor from "tinycolor2";
const generateAvatar = (hash) => {
    const [r, g, b] = hash
        .slice(hash.length-3, hash.length)
        .split("")
        .map(char => char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0));
    return {
        color: tinycolor({r, g, b}).toHexString(),
        colorLighten: tinycolor({r, g, b}).lighten(40).toHexString()
    };
};

export default generateAvatar;
