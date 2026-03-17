import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";

const EventPackage = ({ header, list, children }) => {
  return (
    <Grid item xs={12} lg={4}>
      <Box
        sx={{
          background: "white",
          padding: "1rem",
          borderRadius: "5px",
          border: "1px solid #A5A5A5",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <Typography
          variant="h6"
          fontSize={36}
          sx={{ marginTop: "1rem", textAlign: "center" }}
        >
          {header}
        </Typography>
        <Divider sx={{ width: "80%", margin: ".5rem 0 1rem 0" }} />
        {children}
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.75rem",
            margin: "2rem 0 0 0",
          }}
        >
          Package Details:
        </Typography>
        <ul style={{ padding: "0 0 0 1.5rem", margin: "0" }}>
          {list.map((item, index) => {
            return (
              <li key={index} style={{ margin: "0 0 .5rem 0" }}>
                <Typography fontSize={12}>{item}</Typography>
              </li>
            );
          })}
        </ul>
        <Box sx={{ margin: "1.5rem 0 .5rem 0" }}>
          <Link href="/contact">
            <Button variant="outlined" color="primary">
              Inquire Here
            </Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default EventPackage;
