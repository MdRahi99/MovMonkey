"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../icon/UploadIcon";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function VideoUploader({ files, setFiles, maxFiles = 1 }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles((prevFiles) => {
        const remainingSlots = maxFiles - prevFiles.length;
        const newFiles = acceptedFiles.slice(0, remainingSlots).map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );
        return [...prevFiles, ...newFiles];
      });
    },
    [maxFiles, setFiles],
  );

  const removeFile = (fileIndex) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex),
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".mov", ".avi", ".mkv"],
    },
    maxFiles: maxFiles,
  });

  return (
    <>
      {files.length !== maxFiles && (
        <div
          {...getRootProps()}
          className="w-full rounded-xl border-4 border-dashed border-secondary p-4 sm:w-8/12 lg:w-5/12"
        >
          <input {...getInputProps()} />

          <div className="text-center">
            <div className="my-5 flex justify-center">
              <UploadIcon />
            </div>
            {isDragActive ? (
              <p className="text-2xl font-semibold max-sm:text-lg">
                Drop the files here...
                <br /> OR
              </p>
            ) : (
              <p className="text-2xl font-semibold max-sm:text-lg">
                Drag and Drop your files here <br /> OR
              </p>
            )}
            <div className="mt-2">
              <Button
                type="button"
                variant="secondary"
                className="px-10 sm:px-20"
              >
                Browse
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap">
        {files.map((file, index) => (
          <div
            key={index}
            className="relative m-2 h-auto w-full overflow-hidden rounded border-2 border-secondary sm:w-72"
          >
            <video
              src={file.preview}
              controls
              disablePictureInPicture
              controlsList="nodownload noplaybackrate"
              className="aspect-video w-full rounded object-cover"
            />

            <div onClick={() => removeFile(index)}>
              <X className="absolute right-2 top-2 size-5 cursor-pointer rounded-full bg-red-500 p-1 text-white" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
