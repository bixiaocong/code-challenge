import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};