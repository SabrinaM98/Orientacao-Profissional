import { Skeleton, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import './Skeleton.css'

export const Skeletons = () => {
  return (
    <Container maxWidth={false} className="centered-skeleton">
      <Stack spacing={1} width="100%" >
        {/* <Skeleton variant="rounded" width="100%"/> */}
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" width={350} height={60} />
        <Skeleton variant="rectangular" height={160} />
        <Skeleton variant="rectangular" width={350} height={60} />
        <Skeleton variant="rectangular" height={160} />
        <Skeleton variant="rectangular" height={160} />
        {/* <Skeleton variant="rounded" width={210} height={60} /> */}
      </Stack>
    </Container>
  );
};