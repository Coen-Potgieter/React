import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";


export default function ResultsModal({ isOpen, onClose}) {

    const dialogRef = useRef();

    useEffect(() => {

        if (isOpen) {
            dialogRef.current.showModal()
        } else {
            dialogRef.current.close()
        }

    }, [isOpen])

    return createPortal(
        <dialog
            ref={dialogRef}
            onClose={onClose}
            className={`bg-red-600
w-10/12 h-full
`}
        >
            <h2>THIS IS A MODAL</h2>
        </dialog>, document.getElementById("modal")
    )
}
