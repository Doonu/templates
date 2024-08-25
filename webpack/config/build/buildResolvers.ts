import {ResolveOptions} from "webpack";
import path from "path";
import {BuildOptions} from "./build.types";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [options.paths.src, 'node_modules'],
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@processes': path.resolve(__dirname, 'src/processes'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@entities': path.resolve(__dirname, 'src/entities'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
        mainFiles: ['index'],
    }
}
