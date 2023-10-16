import { FC, ReactNode } from 'react'
import './PageContainer.scss'

type PageContainerProps = {
    children: ReactNode
}
const PageContainer: FC<PageContainerProps> = ({ children }) => {
    return (
        <div className='page__container container'>{children}</div>
    )
}

export default PageContainer