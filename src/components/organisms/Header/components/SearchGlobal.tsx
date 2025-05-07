import {DialogTitle} from "@radix-ui/react-dialog";
import {Search} from "lucide-react";
import Link from "next/link";
import {Dialog, DialogClose, DialogContent} from "../../../atoms/dialog";
import { ScrollArea } from "../../../atoms/scroll-area";
import { Input } from "../../../atoms/input";

interface SearchGlobalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

/*
const indexesIcon: any = {
    "dge-service": {
        icon: <Waypoints className="w-4"/>,
        title: "Serviços"
    },
    "dge-concurso": {
        icon: <Waypoints className="w-4"/>,
        title: "Concursos"
    },
    "dge-oferta-formativa": {
        icon: <Waypoints className="w-4"/>,
        title: "Ofertas Formativas"
    },
    "dge-entidades-formadora": {
        icon: <Waypoints className="w-4"/>,
        title: "Entidade Formadora"
    },
    "dge-documento": {
        icon: <Waypoints className="w-4"/>,
        title: "Documentos"
    },
    "dge-apoios-incentivos": {
        icon: <Waypoints className="w-4"/>,
        title: "Apoios Incentivos"
    },
    "dge-qualificacao": {
        icon: <Waypoints className="w-4"/>,
        title: "Qualificações"
    },
};
*/

export function SearchGlobal({open, setOpen}: SearchGlobalProps) {
    //const [results, setResults] = useState<{ [key: string]: any[] }>({});
   // const [query, setQuery] = useState("");

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="p-0 max-w-[calc(100%-32px)] md:max-w-3xl overflow-hidden rounded-3xl sm:rounded-3xl"
            >
                <DialogTitle className="hidden">
                    <span></span>
                </DialogTitle>
                <DialogClose className="hidden">
                    <span></span>
                </DialogClose>
                <div className="w-full border-b pb-2">
                    <div className="relative px-6 pt-6 pb-2">
                        <div
                            className="absolute inset-y-0 left-6 top-4 flex items-center pl-4 text-gray-500 pointer-events-none">
                            <Search size={20}/>
                        </div>
                        <Input
                            type="search"
                            id="default-sear"
                            className="w-full rounded-full h-11 border border-input bg-background pl-12 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-nonedisabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="¿Pesquisar?"
                            value={''}
                            /*onChange={(e) => {
                                setQuery(e.target.value);
                                debouncedSearch(e.target.value);
                            }}*/
                            autoComplete="off"
                        />
                    </div>
                </div>
                {Object.values([]).flat().length > 0 ? (
                    <ScrollArea maxH="60vh" className="!h-auto px-3">
                        <div className="flex flex-col gap-4 relative h-full pb-16">
                            {Object.keys([]).map((indexUid) => (
                                <div key={indexUid} className="flex flex-col gap-2">
                                    <div className="pl-6 flex items-center gap-2 text-neutral-500">
                                        <h3 className="text-sm font-medium"></h3>
                                    </div>
                                    <div className="flex flex-col gap-2">

                                        <Link href={"#"} target="_self">
                                            <div
                                                onClick={() => setOpen(false)}
                                                className="flex flex-col w-full pl-6 pr-4 py-3 rounded-xl border hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer transition-all ease-in-out duration-200 text-left"
                                            >
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <div
                                                        className="text-editor line-clamp-2 md:line-clamp-1 font-semibold"
                                                       /* dangerouslySetInnerHTML={{
                                                            __html: hit?.titulo || hit?.nome || hit?.name || hit?.nome_lider,
                                                        }}*/
                                                    />
                                                    {indexUid === "sub-causa" && (
                                                        <>
                                                            <span>-</span>
                                                            <span
                                                                className="text-xs text-primary border font-semibold border-dashed w-fit px-2 rounded-full">
                                                               {/* {hit?.cause}*/}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                                <div
                                                    className="text-editor line-clamp-1 mt-1 font-normal"
                                                   /* dangerouslySetInnerHTML={{
                                                        __html: hit?.descricao || hit?.resumo || hit?.objetivo_descricao,
                                                    }}*/
                                                />
                                            </div>
                                        </Link>
                                    )

                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                ) : (
                    <div className="flex justify-center pt-16 min-h-[400px] max-h-[60vh]">
            <span className="font-medium text-muted-foreground text-lg">
              Digite algo para pesquisar
            </span>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
