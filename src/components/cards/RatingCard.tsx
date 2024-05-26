import { Box, Button, Rating, Typography } from "@mui/material";

const RatingCard = () => {
  return (
    <>
      <Box
        sx={{ border: 1, p: 5, width: "fit-content" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
      >
        <Typography variant="h5">Оцініть наш продукт</Typography>

        <Rating size="large" />

        <Button variant="contained">Залишити відгук</Button>
      </Box>
    </>
  );
};

export default RatingCard;
