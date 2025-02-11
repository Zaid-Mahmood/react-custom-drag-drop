import React, { useState } from 'react';

const DragDrop = () => {
    const profileImg = [
        { id: 1, img: `${process.env.PUBLIC_URL}/dumImg.jpg` },
        { id: 2, img: "" },
        { id: 3, img: "" },
        { id: 4, img: "" }
    ];
    const [draggedId, setDraggedId] = useState(null);
    const [imgState, setImgState] = useState(profileImg);

    const outerDivClass = "outerDivClass";
    const imgDimensions = "imgDimensions";
    const dashedClass = "dashed";

    const dragStart = (id) => {
        setDraggedId(id);
    };

    const dragOverFunc = (e) => {
        e.preventDefault();
    };

    const dragEnd = () => {
        setDraggedId(null); 
    };

    const dropFunction = (id) => {

        if (draggedId !== null) {
            const updatedImages = [...imgState];
            const draggedIndex = updatedImages.findIndex((item) => item.id === draggedId);
            const droppedIndex = updatedImages.findIndex((item) => item.id === id);

            // Swap images between the dragged and dropped elements
            [updatedImages[draggedIndex], updatedImages[droppedIndex]] = [updatedImages[droppedIndex], updatedImages[draggedIndex]];

            setImgState(updatedImages); // Update state with swapped images

        }
    };

    console.log(imgState , "updatedimgStates")
    return (
        <div className='bgMainColor'>
            <div className={outerDivClass}>
                {imgState.map((item) => (
                    <div  key={item.id}  className=  {item.id === draggedId ? dashedClass :'loopOuterDiv'} 
                    onDragOver={dragOverFunc} onDrop={() => dropFunction(item.id)}>
                        {item.img ? (
                            <img
                                draggable
                                className={imgDimensions}
                                src={item.img}
                                alt={`item-img-${item.id}`}
                                onDragStart={() => dragStart(item.id)}
                                onDragEnd={() => dragEnd()}
                            />
                        ) : (
                            <div className='bg-white'></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragDrop;
