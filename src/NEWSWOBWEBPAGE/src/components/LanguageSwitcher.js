import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, MenuItem, IconButton, Menu, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleLanguageMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleLanguageMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLanguageChange = (lang) => {
		i18n.changeLanguage(lang);
		setAnchorEl(null);
	};

	return (
		<FormControl variant="outlined" size="small">
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<IconButton
					color="inherit"
					onClick={handleLanguageMenuClick}
					sx={{ display: { xs: "", md: "block" } }}
				>
					<LanguageIcon />
				</IconButton>
				<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageMenuClose}>
					<MenuItem onClick={() => handleLanguageChange("en")}>🇺🇸 English</MenuItem>
					<MenuItem onClick={() => handleLanguageChange("fr")}>🇫🇷 Français</MenuItem>
					<MenuItem onClick={() => handleLanguageChange("fa")}>🇮🇷 فارسی</MenuItem>
				</Menu>
			</Box>
		</FormControl>
	);
};

export default LanguageSwitcher;
