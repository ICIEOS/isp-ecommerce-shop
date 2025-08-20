'use client'
import { useEffect, useState } from "react"
import { Range } from "react-range"
import { useDispatch, useSelector } from "react-redux"
import { addprice } from "../../features/filterSlice"

const PriceRangeSlider = () => {
    const { shopList } = useSelector((state) => state.filter)

    const [price, setPrice] = useState([shopList.price.min, shopList.price.max])

    const dispatch = useDispatch()

    // price handler
    const handleOnChange = (values) => {
        setPrice(values)
        dispatch(addprice({ min: values[0], max: values[1] }))
    }

    useEffect(() => {
        setPrice([shopList.price.min, shopList.price.max])
    }, [shopList])

    return (
        <div className="range-slider-one">
            <Range
                step={1}
                min={0}
                max={100}
                values={price}
                onChange={handleOnChange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "6px",
                            width: "100%",
                            backgroundColor: "#ccc",
                            borderRadius: "4px",
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "20px",
                            width: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#007bff",
                        }}
                    />
                )}
            />

            <div className="input-outer">
                <div className="amount-outer">
                    <span className="area-amount">{price[0]}$ – {price[1]}$</span>
                </div>
            </div>
        </div>
    )
}

export default PriceRangeSlider
