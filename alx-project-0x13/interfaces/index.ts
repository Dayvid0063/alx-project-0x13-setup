import { ReactNode } from "react";

export interface ReactComponentProps {
    children: ReactNode
}

// Response type
export interface APIResponse {
  message: string;
}

// For the request body
export interface RequestBody {
    prompt: string;
}

export interface GeneratedImageProps {
    imageUrl: string
    prompt: string
    width?: string
    height?: string
    action: (imagePath: string) => void
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">
