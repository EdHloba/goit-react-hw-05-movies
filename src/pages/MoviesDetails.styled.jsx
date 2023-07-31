import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
    text-decoration: none;
    display: block;
    margin-bottom: 30px;
    outline: 1px solid var(--accent-color);
    // background-color: var(--accent-color);
    border-radius: 5px;
    width: 70px;
    padding: 8px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: black;

    transition: transform var(--transition), background-color var(--transition);
    
    &:hover,
    &:focus {
        transform: scale(1.1);
        // color: #ffffff;
        background-color: var(--accent-color);
    }
    `;