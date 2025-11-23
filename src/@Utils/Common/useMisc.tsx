// import { createContext, useContext, useState, useCallback } from 'react';
// // import {
// //   uploadPublicImage,
// // } from '@Utils/controllers/misc';
// import { hooks } from '@Utils';
// import { useMutation } from '@tanstack/react-query';
// interface MiscI {
//   handleUploadPublicFile: (files: File[]) => Promise<string[] | null>;
//   isUploadFileLoading: boolean;
//   handleSendPlatformInvitation: (userId: string, data: any) => void;
//   isPlatformInvitationMailLoading: boolean;
// }

// const MiscContext = createContext<MiscI>({} as MiscI);

// export const useMisc = () => useContext(MiscContext);

// function useMiscProvider() {
//   const { ShowErrorSnackBar, ShowApiErrorSnackBar, ShowSuccessSnackBar } = hooks.useSnackBar();
//   const [isUploadFileLoading, setIsUploadFileLoading] = useState(false);

//   /**
//    * Generic function to upload files in public bucket
//    */
//   const handleUploadPublicFile = useCallback(async (files: File[]): Promise<string[] | null> => {
//     if (!files?.length) return null;

//     setIsUploadFileLoading(true);
//     try {
//       const uploadPromises = files.map(async (file) => {
//         const formData = new FormData();
//         formData.append('file', file);

//         const extension = file.name.split('.').pop() || '';
//         const response = await uploadPublicImage({
//           formData,
//           extension,
//         });

//         if (response?.data?.data?.Location) {
//           ShowSuccessSnackBar(`File "${file.name}" uploaded successfully`);
//           return response.data.data.Location;
//         }
//         ShowErrorSnackBar(`Failed to upload ${file.name}`);
//         return null;
//       });

//       const results = await Promise.all(uploadPromises);

//       const uploadedUrls = results.filter((url): url is string => Boolean(url));

//       return uploadedUrls;
//     } catch (err: any) {
//       const message = err?.message || 'Failed to upload file(s)';
//       ShowErrorSnackBar(message);
//       return null;
//     } finally {
//       setIsUploadFileLoading(false);
//     }
//   }, []);


//   return {
//     /**
//      * Public file upload
//      */
//     handleUploadPublicFile,
//     isUploadFileLoading,
//   };
// }

// export function ProvideMisc({ children }: { children: React.ReactNode }) {
//   const value = useMiscProvider();
//   return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
// }
