import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";

export default function Download() {
	return (
		<Box sx={{ px: { md: 13, sm: 10, xs: 2 }, my: { md: 3, xs: 5 }, pb: 8 }}>
			<Typography variant="h2" sx={{ pb: 1, fontWeight: 600 }}>
				Downloads
			</Typography>
			<Typography variant="h5" sx={{ fontWeight: 600, pb: 5 }}>
				Latest v2.0
			</Typography>
			<List>
				<ListItem>
					<Typography component="a" href="/" variant="h6" sx={{ fontWeight: 500, py: 1 }}>
						Get Android app on google play store <FaArrowRight />
					</Typography>
				</ListItem>
				<ListItem>
					<Typography component="a" href="/" variant="h6" sx={{ fontWeight: 500, py: 1 }}>
						Get IOS app on app play store <FaArrowRight />
					</Typography>
				</ListItem>
				<ListItem>
					<Typography component="a" href="/" variant="h6" sx={{ fontWeight: 500, py: 1 }}>
						Download .deb file
						<FaArrowRight />
					</Typography>
				</ListItem>
				<ListItem>
					<Typography component="a" href="/" variant="h6" sx={{ fontWeight: 500, py: 1 }}>
						Download .exe file
						<FaArrowRight />
					</Typography>
				</ListItem>
				<ListItem>
					<Typography component="a" href="/" variant="h6" sx={{ fontWeight: 500, py: 1 }}>
						Download .rpm file
						<FaArrowRight />
					</Typography>
				</ListItem>
			</List>
		</Box>
	);
}
