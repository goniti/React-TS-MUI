import React, { FC } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';
import { TiEye } from 'react-icons/ti';
import { color } from '../../styles/color';
import { vars } from '../../styles/vars';

const propTypes = {
    data: PropTypes.shape({
        date: PropTypes.string,
        explanation: PropTypes.string,
        hdurl: PropTypes.string,
        media_type: PropTypes.string,
        service_version: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
    }),
};

const MEDIA_VIDEO = 'video';

const CardWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    background-color: ${color.light};
`;

const CardHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const CardHeaderIllustration = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 50%);
    height: 50vh;
`;

const CardHeaderIcon = styled(TiEye)`
    color: ${color.light};
    background-repeat: no-repeat;
    background-size: ${vars.iconSize};
    height: ${vars.iconSize};
    width: ${vars.iconSize};
`;

const CardHeaderIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: ${vars.iconWrapperSize};
    width: ${vars.iconWrapperSize};
    height: ${vars.iconWrapperSize};
    border-radius: 50%;
    background-color: ${color.primary};
    position: absolute;
    z-index: 10;
    bottom: 35%;
    cursor: pointer;
`;

const CardHeaderPicture = styled.img`
    object-fit: cover;
    width: 100%;
    height: 35vh;
`;

const CardHeaderVideo = styled.iframe`
    border: none;
    object-fit: cover;
    width: 100%;
    height: 35vh;
`;

const CardHeaderTitle = styled.p`
    position: absolute;
    bottom: ${vars.bigGutter};
    z-index: 555;
    overflow: hidden;
    font-size: 1.75rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0.2em;
    width: 99%;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 ${vars.bigGutter};
    margin-bottom: 10rem;
`;

const CardContentDescription = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.85rem;
    line-height: 2.5;
    color: ${color.tertary};
    font-weight: 500;
`;

const CardContentMoreDescription = styled.button`
    color: ${color.primary};
    background-color: ${color.light};
    border: none;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 2rem;
    width: max-content;
    cursor: pointer;
`;

const Card: FC<InferProps<typeof propTypes>> = ({ data }): JSX.Element => {
    return (
        <>
            {data && (
                <>
                    <CardWrapper>
                        <CardHeader>
                            <CardHeaderIconWrapper>
                                <CardHeaderIcon />
                            </CardHeaderIconWrapper>
                            <CardHeaderIllustration>
                                {data.media_type === MEDIA_VIDEO ? (
                                    <CardHeaderVideo src={`${data.url}`} />
                                ) : (
                                    <CardHeaderPicture src={`${data.url}`} alt={`${data.title}`} />
                                )}
                            </CardHeaderIllustration>
                            <CardHeaderTitle>{data.title}</CardHeaderTitle>
                        </CardHeader>
                        <CardContent>
                            <CardContentDescription>{data.explanation}</CardContentDescription>
                            <CardContentMoreDescription>Read More</CardContentMoreDescription>
                        </CardContent>
                    </CardWrapper>
                </>
            )}
        </>
    );
};

Card.propTypes = propTypes;

export { Card };
