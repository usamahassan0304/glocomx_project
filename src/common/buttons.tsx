import React from 'react'
import { Button } from 'antd';

interface Props {
  btnTitle ?: any
}

const Buttons : React.FC<Props> = ( {btnTitle} : {btnTitle ?: any}) => {
  console.log(btnTitle)
  return (
    <>   
        <Button 
            className='mt-2 mb-5'
            shape='round' 
            size='large' 
            style={{
                background : '#FFC300',
                color : 'white', 
                border : '2px solid #FFC300', 
                padding : '0 64px',
                fontSize: 18,
                }}>
          { btnTitle }
        </Button>
    </>
  )
}

export default Buttons