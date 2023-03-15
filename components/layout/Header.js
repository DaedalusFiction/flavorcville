import { ArrowRightAlt, MenuIcon, Phone } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { header } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import ExpandingText from "../general/ExpandingText";
import NativeImage from "../general/NativeImage";
import NavMenu from "./NavMenu";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const router = useRouter();
    const pathName = router.pathname;
    const baseHeaderColor =
        pathName === "/" ? "transparent" : theme.palette.primary.main;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <Box
            sx={{
                position: "fixed",
                top: "0",
                left: "0",
                zIndex: "100",
                width: "100%",
                padding: ".75rem 0",
                transition: "300ms",
                boxShadow:
                    scrollPosition > 50
                        ? "0px 5px 5px rgba(0, 0, 0, 0.2)"
                        : "transparent",
                backgroundColor: "#fcf6f5",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "space-between", md: "center" },
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: ".5rem",
                        }}
                    >
                        <Link href="/">
                            <Box sx={{ cursor: "pointer" }}>
                                <Image
                                    src={header.image.url}
                                    unoptimized
                                    width={200}
                                    height={62}
                                    alt={header.image.alt}
                                />
                            </Box>
                        </Link>
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: "1rem",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                className="hover-underline-animation"
                                sx={{
                                    fontWeight: "700",
                                    lineHeight: "1.25em",
                                    color: theme.palette.custom.dark,
                                }}
                            >
                                <Link href="/">Home</Link>
                            </Typography>
                            <Typography
                                className="hover-underline-animation"
                                sx={{
                                    fontWeight: "700",
                                    lineHeight: "1.25em",
                                    color: theme.palette.custom.dark,
                                }}
                            >
                                <Link href="/menus">Sample Menus</Link>
                            </Typography>
                            <Typography
                                className="hover-underline-animation"
                                sx={{
                                    fontWeight: "700",
                                    lineHeight: "1.25em",
                                    color: theme.palette.custom.dark,
                                }}
                            >
                                <Link href="/greek-life">Greek Life</Link>
                            </Typography>
                            <Typography
                                // variant="h6"
                                className="hover-underline-animation"
                                sx={{
                                    fontWeight: "700",
                                    lineHeight: "1.25em",
                                    color: theme.palette.custom.dark,
                                }}
                            >
                                <Link href="/about">About Us</Link>
                            </Typography>
                            <Typography
                                // variant="h6"
                                className="hover-underline-animation"
                                sx={{
                                    fontWeight: "700",
                                    lineHeight: "1.25em",
                                    color: theme.palette.custom.dark,
                                }}
                            >
                                <Link href="/contact">Inquire Here</Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <NavMenu />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;
