// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import pic1 from "./pic1.jpg";
// import pic2 from "./pic2.jpg";
// import pic3 from "./pic3.jpg";

// function srcset(image, width, height, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${width * cols}&h=${
//       height * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function CustomImageList() {
//   return (
//     <ImageList
//       sx={{
//         width: 500,
//         height: 450,
//         transform: 'translateZ(0)',
//       }}
//       rowHeight={200}
//       gap={1}
//     >
//       {itemData.map((item) => {
//         const cols = item.featured ? 2 : 1;
//         const rows = item.featured ? 2 : 1;

//         return (
//           <ImageListItem key={item.img} cols={cols} rows={rows}>
//             <img
//               {...srcset(item.img, 250, 200, rows, cols)}
//               alt={item.title}
//               loading="lazy"
//             />
//             <ImageListItemBar
//               sx={{
//                 background:
//                   'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//                   'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//               }}
//               title={item.title}
//               position="top"
//               actionIcon={
//                 <IconButton
//                   sx={{ color: 'white' }}
//                   aria-label={`star ${item.title}`}
//                 >
//                   <StarBorderIcon />
//                 </IconButton>
//               }
//               actionPosition="left"
//             />
//           </ImageListItem>
//         );
//       })}
//     </ImageList>
//   );
// }


// const itemData = [
//     {img: pic1,},
//     {img: pic2,},
//     {img: pic3,},
//     {img: pic3,},
//     {img: pic1,},
//     {img: pic2,},
//     {img: pic1,},
//     {img: pic2,},
//     {img: pic3,},
//     {img: pic3,},
//     {img: pic1,},
//     {img: pic2,},
//   ];
