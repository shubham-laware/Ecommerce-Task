import React from "react";

function Text(){
    return(
        <div className='mx-5' style={{width: '90%', height: 'relative', paddingLeft: '30px'}} id="section">
            <h3 style={{width: '100%', fontSize: '24px', fontFamily: 'Courier New, Courier, monospace', color: 'white', backgroundColor: 'rgb(101, 168, 230)', marginTop: '15px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h3>
        </div>
    );
}

export default Text;
