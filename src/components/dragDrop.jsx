import React, { useState } from 'react'

const DragDrop = () => {
    const imgsArray = [
        { id: 1, img: `${process.env.PUBLIC_URL}/dumImg-2.jpg` },
        { id: 2, img: "" },
        { id: 3, img: "" },
        { id: 4, img: "" },
        { id: 5, img: "" }
    ]
    const [imgArray, setImgArray] = useState([...imgsArray]);
    const [draggableId, setDraggableId] = useState(null);
    const imgDimensions = "imgDimensions";
    const commonCssValues = "commonValues";
    const outerDivClasses = "outerDivClasses";
    const whiteBoxes = "whiteBoxes";
    const mainloopDiv = "mainloopDiv";

    const dragStartFunction = (id) => {
        setDraggableId(id)
    }

    const dragEndFunction = () => {
        setDraggableId(null)
    }

    const dragOverFunction = (e) => {
        e.preventDefault();
    }
    const dropFunction = (id) => {
        if (draggableId !== null) {
            const newImgArray = [...imgArray];
            const draggedIndex = newImgArray.findIndex((item) => item.id === draggableId);
            const droppedIndex = newImgArray.findIndex((item) => item.id === id);
            [newImgArray[draggedIndex], newImgArray[droppedIndex]] = [newImgArray[droppedIndex], newImgArray[draggedIndex]]
            setImgArray(newImgArray)
        }
    }
    return (
        <React.Fragment>
            <h1 className='centerHeading'>Image Drag And Drop</h1>
            <div className={outerDivClasses}>
                {imgArray.map((item) => (
                    <div className={draggableId === item.id ? mainloopDiv : null}

                        key={item.id}>
                        {item.img ?
                            <div className={whiteBoxes}>
                                <img draggable onDragStart={() => dragStartFunction(item.id)} onDragEnd={dragEndFunction} className={imgDimensions + " " + commonCssValues} src={item.img} alt='item-img' />
                            </div>
                            :
                            <div onDragOver={dragOverFunction} onDrop={() => dropFunction(item.id)} className={commonCssValues + " " + whiteBoxes}>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </React.Fragment>

    )
}

export default DragDrop;
