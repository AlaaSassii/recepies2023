import { FC, ReactNode } from 'react'
import './PageContainer.scss'

type PageContainerProps = {
    children: ReactNode
}
const PageContainer: FC<PageContainerProps> = ({ children }) => {
    return (
        <div className=' container page__container'>{children}</div>
    )
}

export default PageContainer