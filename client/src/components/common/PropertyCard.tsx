import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";
import { PropertyCardProps } from "interfaces/property";

const PropertyCard = ({
  id,
  title,
  price,
  location,
  photo,
}: PropertyCardProps) => {
  console.log(location);
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        maxWidth: "360px",
        padding: "10px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 0.1",
        },
        cursor: "pointer",
        textDecoration: "none",
      }}
      elevation={0}
    >
      <CardMedia
        component={"img"}
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{
          borderRadius: "10px",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          paddingX: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500}>
            {title}
          </Typography>
          <Stack direction={"row"} gap={0.5} alignItems="flex-start">
            <Place sx={{ fontSize: 18, color: "#11142d", marginTop: 0.5 }} />
            <Typography sx={{ textDecoration: "none" }}>{location}</Typography>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={2}
          bgcolor="#dadefa"
          height="fit-content"
        >
          <Typography fontWeight={500} fontSize={12}>
            Rs {price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
