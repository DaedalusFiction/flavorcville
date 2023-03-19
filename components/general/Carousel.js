import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import theme from "../../styles/themes/theme";

const Carousel = ({ children }) => {
    const [counter, setCounter] = useState(1);
    const [pause, setPause] = useState(false);
    const content = children;

    const handleNext = () => {
        if (counter !== content.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    const handlePre = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        } else {
            setCounter(content.length);
        }
    };

    const handlePage = (page) => {
        setCounter(page);
    };

    const handleMouse = () => {
        setPause(!pause);
    };

    useEffect(() => {
        let interval = setInterval(() => {
            if (!pause) {
                handleNext();
            } else {
                clearInterval(interval);
            }
        }, 8000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <Box
                className="slide"
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouse}
                sx={{
                    backgroundColor: theme.palette.background.default,
                    height: { xs: "0%", md: "115%" },
                }}
            >
                {content.map((item, index) => (
                    <div
                        className={counter - 1 === index ? "show" : "not-show"}
                        key={index}
                    >
                        {item}
                    </div>
                ))}

                <IconButton
                    className="prev"
                    onClick={handlePre}
                    variant="contained"
                    color="secondary"
                >
                    <ArrowBack
                        sx={{
                            color: { xs: "transparent", md: "white" },
                            fontSize: "30px",
                        }}
                    />
                </IconButton>
                <IconButton
                    className="next"
                    onClick={handleNext}
                    variant="contained"
                    color="secondary"
                >
                    <ArrowForward
                        sx={{
                            color: "white",
                            fontSize: "30px",
                            color: { xs: "transparent", md: "white" },
                        }}
                    />
                </IconButton>
            </Box>

            <Box
                sx={{
                    textAlign: "center",
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    margin: ".5rem",
                    gap: ".25rem",
                }}
            >
                {content.map((item, index) => (
                    <span
                        key={index}
                        className={counter - 1 === index ? "dot active" : "dot"}
                        onClick={() => handlePage(index + 1)}
                    />
                ))}
            </Box>
        </>
    );
};

export default Carousel;
