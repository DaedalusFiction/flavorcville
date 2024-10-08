import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";
import ContactGoogleForms from "../../components/contact/ContactGoogleForms";
import Link from "next/link";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Container maxWidth="lg" className="section">
                <Grid
                    container
                    direction={{ xs: "column-reverse", md: "row" }}
                    spacing={6}
                >
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                fontWeight: "600",
                            }}
                        >
                            Get in Touch!
                        </Typography>
                        <Typography>
                            If you&rsquo;re planning a wedding, corporate event,
                            birthday party, get-together, or if you&rsquo;re
                            interested in adding our Greek Life program to your
                            fraternity or sorority, fill out one of the forms or
                            for general inquiries please email us below. We will
                            be in touch soon!
                        </Typography>
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography>Email:</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography
                                    sx={{ textDecoration: "underline" }}
                                >
                                    <a href="mailto:events@flavorcville.com">
                                        events@flavorcville.com
                                    </a>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Address:</Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Box>
                                    <Typography>600 Concord Ave.</Typography>
                                    <Typography>
                                        Charlottesville, VA 22903
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ContactGoogleForms />
                        {/* <ContactForm config={contactConfig} /> */}
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;
