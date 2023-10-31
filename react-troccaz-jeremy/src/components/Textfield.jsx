import styled from '@emotion/styled'


export const TextField = styled.input`
   // fait moi la meme searchbar que google.com
   display: flex;
    z-index: 3;
    position: relative;
    
    min-height: 44px;
    background: #fff;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    margin: 0 auto;
    padding: 0 1rem;
    width: 638px;
    max-width: 584px;
    &:hover {
        background-color: #fff;
        box-shadow: 0 1px 6px rgba(32,33,36,.28);
        border-color: rgba(223,225,229,0);
    }


`

