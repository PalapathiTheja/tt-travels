import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import gokarnaImage from "../assets/gokarna.png";
import kotilingeshwaraImage from "../assets/kotilinga.jpg";
import vidyashankaraImage from "../assets/Sringeri.jpg";
import iskon from "../assets/iskon.jpeg";
import virupaksha from "../assets/Virupaksha.jpg";
import chennakeshava from "../assets/Chennakeshava.jpg";
import bigbull from "../assets/bigbull.jpg"
const KarnatakaTemples = () => {
  const temples = [
    {
      name: "Gokarna Mahabaleshwar Temple",
      description:
        "Located in Gokarna, this ancient temple is dedicated to Lord Shiva and is renowned for its Atmalinga, a revered symbol in Hindu mythology.",
      image: gokarnaImage,
    },
    {
      name: "Kotilingeshwara Temple",
      description:
        "Situated in Kolar, Kotilingeshwara Temple is famous for its massive collection of Shiva Lingas, with over 10 million Lingas installed within the temple complex.",
      image: kotilingeshwaraImage,
    },
    {
      name: "Vidyashankara Temple",
      description:
        "Located in Sringeri, Vidyashankara Temple is an architectural marvel blending Hoysala and Dravidian styles, dedicated to Lord Shiva and known for its intricate carvings.",
      image: vidyashankaraImage,
    },
    {
      name: "Iskon Temple",
      description:
        "ISKCON Bangalore, also known as the International Society for Krishna Consciousness, is a prominent Hare Krishna temple in Bangalore, India. Founded in 1997, the temple complex spans over 4 acres of land and features beautiful gardens, a large worship hall, and a meditation room. ",
      image: iskon,
    },
    {
      name: "Virupaksha Temple",
      description:
        "The Virupaksha Temple is a historic temple located in Hampi, a UNESCO World Heritage Site in Karnataka, India. Although often associated with Hampi, there is a Virupaksha Temple in Bangalore as well, known as the Virupaksha Temple of Basavanagudi.",
      image: virupaksha,
    },
    {
      name: "Chennakeshava Temple",
      description:
        "Chennakeshava Temple, also referred to as Keshava, Kesava or Vijayanarayana Temple of Belur, is a 12th-century Hindu temple in, Hassan district of Karnataka state, India. It was commissioned by King Vishnuvardhana in 1117 CE, on the banks of the Yagachi River in Belur, an early Hoysala Empire capital. ",
      image: chennakeshava,
    },
    {
      name: "Big Bull Temple",
      description:
        "The Big Bull Temple, also known as the Iskcon Temple, is a popular Hindu temple located in Ahmedabad, Gujarat, India. It is dedicated to Lord Nataraja, a form of Lord Shiva, and is famous for its stunning architecture and vibrant atmosphere. The temple complex features a 108-foot tall statue of Lord Shiva, known as the `Big Bull`",
      image: bigbull,
    },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{
          color: "#ff6f00",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Temples in Karnataka
      </Typography>
      <Grid container spacing={4}>
        {temples.map((temple, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                alt={temple.name}
                height="200"
                image={temple.image}
                sx={{
                  objectFit: "cover",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  {temple.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {temple.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KarnatakaTemples;
