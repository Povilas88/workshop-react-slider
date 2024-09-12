export function SliderComponent({ inputValue, handelInputChange, bgColor, textColor }) {
    const inputStyle = {
        appearance: 'none',
        width: "100%",
        heigth: 25,
        cursor: "pointer",
        background: 'lightgray',
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 100,
        }}>
            <input type="range" min={0} max={100} value={inputValue} style={{ inputStyle }} onInput={handelInputChange} />
            <div className="circle" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: !textColor ? "black" : textColor,
                background: !bgColor ? "lightgray" : bgColor,
                height: `${inputValue * 3}px`,
                width: `${inputValue * 3}px`,
                borderRadius: '50%',
            }}>
                <span style={{ fontSize: inputValue > 0 ? `${inputValue}px` : '20px' }}>{inputValue}</span>
            </div>
        </div>
    )
}