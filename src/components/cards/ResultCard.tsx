import { Box, Chip, Typography, useTheme } from "@mui/material";
import TrophyIcon from "../../../icons/trophy.svg?react";
import { SeverityValues } from "../../consts/common";

export interface IResultCardProps {
  resultValue: string;
  description: string;
  severity: SeverityValues;
}

const ResultCard = ({
  resultValue,
  description,
  severity,
}: IResultCardProps) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{ border: 1, py: 3, px: 4, width: "fit-content" }}
        display={"flex"}
        gap={2}
      >
        <TrophyIcon height={72} width={72} />

        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Chip
            label={resultValue}
            sx={{
              ...(severity === SeverityValues.SUCCESS && {
                background: theme.palette.success.light,
              }),
              ...(severity === SeverityValues.WARNING && {
                background: theme.palette.warning.light,
              }),
              ...(severity === SeverityValues.INFO && {
                background: theme.palette.info.light,
              }),
              ...(severity === SeverityValues.ERROR && {
                background: theme.palette.error.light,
              }),
              width: "fit-content",
            }}
          />
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ResultCard;
