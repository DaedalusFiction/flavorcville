import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { menus } from "../../../siteInfo";

const index = () => {
    return (
        <Box className="section" sx={{ marginTop: "8rem" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        Sample Breakfast Menu
                    </Typography>
                    <SizedImage
                        image={menus.imageOne}
                        height={50}
                        width={150}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default index;
