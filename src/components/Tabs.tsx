import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NewsGrid from './NewsGrid';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ categories, articles, headArticle }: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const newsCategories = categories.map((categoryTitle: any) => ({
    title: categoryTitle,
    news: articles.filter((article: any) => article['category'] == categoryTitle),
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Home' {...a11yProps(0)} />
          {newsCategories.map((category: any, index: any) => (
            <Tab key={index} label={category.title} {...a11yProps(index + 1)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NewsGrid category={articles} headContent={headArticle} />
      </TabPanel>
      {newsCategories.map((category: any, index: any) => (
        <TabPanel key={index} value={value} index={index + 1}>
          <NewsGrid category={newsCategories[index].news} headContent={headArticle} />
        </TabPanel>
      ))}
    </Box>
  );
}
