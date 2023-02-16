import React from "react";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "constants/index";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography fontSize={16} fontWeight={600} color="#1142d">
        {title}
      </Typography>
      <Typography fontSize={16} fontWeight={600} color="#1142d">
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="10px"
      borderRadius="2px"
      bgcolor={"#e4e8ef"}
    >
      <Box
        width={`${percentage}%`}
        bgcolor={color}
        height="100%"
        position="absolute"
        borderRadius="5px"
      ></Box>
    </Box>
  </Box>
);

const PropertyReferrals = () => {
  return (
    <Box
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      minWidth={490}
      display="flex"
      flexDirection="column"
      borderRadius="12px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Property Referral
      </Typography>
      <Stack my="20px" direction="column" gap={4}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
