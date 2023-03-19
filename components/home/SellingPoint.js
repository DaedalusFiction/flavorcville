import { StarBorder } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { hero, menus } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import SizedImage from "../general/SizedImage";

const SellingPoint = ({ children, title }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".5em",
                padding: "3rem 0",
            }}
        >
            <Typography
                variant="h5"
                component="p"
                sx={{
                    color: "black",
                    textTransform: "uppercase",
                }}
            >
                {title}
            </Typography>
            {/* <Box>
                <SizedImage image={menus.imageOne} height={50} width={150} />
            </Box> */}
            <Box
                sx={{
                    transform: "scaleY(1)",
                }}
            >
                <SizedImage image={hero.imageTwo} height={50} width={125} />
            </Box>
            <Typography
                sx={{
                    color: theme.palette.custom.dark,
                    textAlign: "center",
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default SellingPoint;
