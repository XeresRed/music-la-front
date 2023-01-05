import { IPost } from "../models/post.model";
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../utils/helpers'

export default function Post({post}: {post: IPost}) {
    const { attributes: {content, cover, autor, title, isd, publishedAt } } = post;
    return (
        <div>
            <article>
                <Image src={cover.data.attributes.formats.medium.url} alt={`imagen blog ${title}`} width={400} height={300}/>
                <div>
                    <h3>{title}</h3>
                    <p>{formatDate(publishedAt)}</p>
                    <p>{content}</p>
                    <Link href={`/blog/${isd}`}>Leer post</Link>
                </div>
            </article>
        </div>
    )
}