import { Favorite, StarBorder } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { menus } from "../../../siteInfo";
import theme from "../../../styles/themes/theme";

const index = () => {
    return (
        <Box className="section" sx={{ marginTop: "8rem" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h1" sx={{ textAlign: "center" }}>
                        Sample Breakfast Menu
                    </Typography>
                    <Box sx={{ margin: "1rem 0" }}>
                        <SizedImage
                            image={menus.imageOne}
                            height={50}
                            width={150}
                        />
                    </Box>
                    <Typography variant="h6">Stations</Typography>
                    <Typography>Variety of Mini Egg Frittatas:</Typography>
                    <Typography variant="caption">
                        Spinach Tomato Feta
                    </Typography>
                    <Typography variant="caption">
                        Fire-roasted Southwest Pepper & Cheddar
                    </Typography>
                    <Typography variant="caption">
                        Vegan options available
                    </Typography>
                    <Typography>Tofu Scramble (vegan)</Typography>
                    <Typography variant="caption">
                        Sriracha & Ketchup
                    </Typography>
                    <Typography>Bacon & Turkey Sausage</Typography>
                    <Typography>French Toast & Syrup</Typography>
                    <Typography>Best Breakfast Potatoes</Typography>
                    <Typography>Fresh Fruit Salad</Typography>
                    <Typography>Variety of Pastries</Typography>
                    <Typography variant="caption">
                        Gluten-free options
                    </Typography>
                    <StarBorder
                        sx={{ color: theme.palette.custom.darkMuted }}
                    />
                    <Typography variant="h5">
                        Orange Juice, Infused Water, Bottled Water
                    </Typography>
                    <Typography variant="h5">Coffee and Tea</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default index;
