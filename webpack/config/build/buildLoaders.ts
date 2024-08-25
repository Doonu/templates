import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./build.types";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[]{

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}
