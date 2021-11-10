import styled from 'styled-components';

export const PageContainer = styled.div`
    margin-top: 4rem;
    border-radius: 1.5rem;
    background-color:rgba(0, 0, 0, 0.06);
    padding: 1rem;


    .page-content {
        display: flex;
        justify-content: center;
        padding-bottom: 2rem;
        flex-wrap: wrap;
        gap: var(--gap);

        section {
            width: 100%;
            max-width: 32rem;
        }

        .section {           
            border-radius: 1.5rem;
            border: 1px solid var(--primary-color);
        }

        .section-header {
            text-align: center;
            background: var(--primary-color);
            border-radius: 1.5rem 1.5rem 0 0;
        }

        .content-inside {
            padding: 1rem;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;

            img {
                max-width: 3rem;
            }

        }

        input[type="text"], button {
            font-size: 1.6rem;
            height: 4rem;
            text-align: center;
            border: none;
            width: 100%;
            margin-right: 0.2rem;
            border-radius: 0.5rem;
        }

        button, input[type="checkbox"] {
            cursor: pointer;
        }
/* 
        input[type="checkbox"] {
            height: 4rem;
            width: 4rem;
        } */
        
        label {
            font-size: 1.6rem;
        }
    }
`