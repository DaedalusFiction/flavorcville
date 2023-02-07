import { ArrowRightAlt, MenuIcon } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
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
                // borderBottom: "1px solid " + theme.palette.custom.lightMuted,
                width: "100%",
                padding: ".75rem 0",
                transition: "300ms",
                boxShadow:
                    scrollPosition > 50
                        ? "0px 5px 5px rgba(0, 0, 0, 0.2)"
                        : "transparent",
                backgroundColor: "white",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/">
                        <Box sx={{ cursor: "pointer" }}>
                            <NativeImage
                                image={header.image}
                                maxSize={200}
                                url={header.image.url}
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
                                color: theme.palette.custom.dark,
                            }}
                        >
                            <Link href="/menus">Sample Menus</Link>
                        </Typography>
                        <Typography
                            className="hover-underline-animation"
                            sx={{
                                fontWeight: "700",
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
                                color: theme.palette.custom.dark,
                            }}
                        >
                            <Link href="/about-us">About Us</Link>
                        </Typography>
                        <Link href="/contact">
                            <Button variant="outlined" color="secondary">
                                Book Now
                            </Button>
                        </Link>
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
