import { ReactNode } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import styles from './Folder.module.scss'

type FolderProps = {
	content: ReactNode
	fontSize: number
}

export const Folder = ({ content, fontSize }: FolderProps) => {
	return (
		<>
			<h4 className={styles.size}>{content}</h4>
			<button>
				<IoMdArrowRoundBack fontSize={fontSize} />
			</button>
		</>
	)
}
