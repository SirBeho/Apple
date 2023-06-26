import Image from "next/image"
import "./watch.css"

export default function Watch_model(model) {
    return (
        <div id="model_box">
            <div style={{ width: "60px" }}>
                <Image src={`/img_watch/${model.imagen}`} alt={`${model.imagen}`} width={"100"} height={"100"} layout="responsive" />
            </div>
            <div style={{ textAlign: "center" }}>
                {model.nombre}
            </div>
        </div>

    )
}