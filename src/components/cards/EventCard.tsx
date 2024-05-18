import { Map, SportsBar, SportsEsports } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Paper, Typography } from "@mui/material";

interface IEventCardProps {
  name: string;
  date: string;
  description: string;
  location: string;
}

const EventCard = (props: IEventCardProps) => {
  return (
    <>
      <Paper elevation={4} sx={{ p: 2 }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Box
            height={200}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ border: 1, width: "100%", height: "100%" }}>img</Box>
            <Box
              sx={{
                border: 1,
                width: "40%",
                maxHeight: 200,
                maxWidth: 200,
                aspectRatio: 1,
              }}
            >
              img
            </Box>
          </Box>
          <Box display={"flex"} gap={1} sx={{ mt: 5}}>
            <Typography variant="h5" fontWeight={"bold"}>
              Назва
            </Typography>
            <Typography variant="h5">{props.name}</Typography>
          </Box>

          <Divider />

          <Box display={"flex"} gap={1} paddingBlock={1}>
            <Chip icon={<SportsBar />} label="entertaining" />
            <Chip icon={<SportsEsports />} label="sport" />
          </Box>

          <Typography display={"flex"} gap={1} alignItems={"center"}>
            <Typography fontWeight={"bold"}>Дата:</Typography>
            <Typography>{props.date}</Typography>
          </Typography>

          <Typography display={"flex"} flexDirection={"column"} gap={1}>
            <Typography fontWeight={"bold"}>Опис:</Typography>
            <Typography sx={{ pl: 4 }}>{props.description}</Typography>
          </Typography>

          <Divider />

          <Box display={"flex"} gap={1}>
            <Map />
            <Typography fontWeight={"bold"}>Локація</Typography>
            <Typography>{props.location}</Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Button sx={{ marginLeft: "auto" }} variant="contained">
              Перейти
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default EventCard;
